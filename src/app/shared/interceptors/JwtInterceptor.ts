import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { AuthenticationService } from "src/app/services/authentication.service";
import { UserRequest, UserResponse } from '../../interfaces/authentication.interface';
import { environment } from "src/environments/environment";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Ignorar cuando es la petición http para autenticar
    if (this.isAuthenticationRequest(request)) {
      return next.handle(request);
    }
    

    // Obtener el token JWT utilizando el servicio de autenticación
    // TODO: Almacenar el token y solo generar uno nuevo cuando haya expirado
    return this.authService.signUp({
      email: 'example@domain.com',
      password: 'qCYgPz#@cwG7'
    }).pipe(
      switchMap((response: any) => {
        const authToken = response.token;

        if (authToken) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${authToken}`,
              Accept: '*/*'
            }
          });
        }

        return next.handle(request);
      })
    );
  }

  private isAuthenticationRequest(request: HttpRequest<any>): boolean {
    return request.url.includes(environment.authUri) && request.method === 'POST';
  }
}