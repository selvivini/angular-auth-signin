import { FormControl } from "@angular/forms";
import { Observable } from "rxjs/Observable";

;

export class CustomValidators{
    static InvalidProjectName(control:FormControl):{[s:string]: Boolean}{
        if (control.value === 'test') {
            return {'InvalidProjectName':true};
      }
     return null;
    }
    static asyncInvalidProjectName(control:FormControl): Promise<any> | Observable<any> {
        const promise = new Promise( (resolve,reject) => {
            setTimeout(()=>{
                if (control.value === 'testproject'){
                    resolve({'InvalidProjectname': true}); 
                } else {resolve (null)};

            },2000);
            return promise;
        })
    }






















    z

    }
}