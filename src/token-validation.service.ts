import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenValidationService {
  constructor(
    private readonly httpService: HttpService, 
    private configService: ConfigService
  ) {};
  

  // Hàm validate token, lấy token từ header Authorization và gửi tới service kiểm tra token
  async validateToken(token: string): Promise<boolean> {
    try {
      // Gửi HTTP request với token trong header Authorization
      const response = await firstValueFrom(
        this.httpService.post(
          this.configService.get<string>('VALIDATION_TOKEN_URL'),  
          {},  // Không cần body request
          {
            headers: {
              Authorization: `Bearer ${token}`,  // Gửi token trong header
            },
          },
        ),
      );
      
      // giá trị trả về phải đảm bảo { status = 1 }
      if (response.data.status === 1) {
        return true;
      } else {
        throw new UnauthorizedException('Token is not valid');
      }
    } catch (error) {
      throw new UnauthorizedException('Error while validating token');
    }
  }
}
