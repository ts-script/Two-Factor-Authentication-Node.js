import { Request, Response } from 'express';
import { Controller, Get } from '@decorators/express';

@Controller('/auth')
export class AuthenticationController {

    @Get('/')
    public async getToken(req: Request ,res: Response): Promise<void> {
        res.send('JWT');
    }
}
