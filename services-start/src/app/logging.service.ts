export class LoggingService{
    logStatusChange(Status: string){
    console.log('A server status changed, new status: ' + Status);
    }

}