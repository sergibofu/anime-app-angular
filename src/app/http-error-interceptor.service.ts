import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class HttpErrorInterceptorService implements HttpInterceptor{
        intercept(req: HttpRequest<any>, next: HttpHandler){
            console.log('http petition started');   
            return next.handle(req)
            .pipe(catchError((error: HttpErrorResponse)=>{
                return throwError(error.error);
            }));
        }
}