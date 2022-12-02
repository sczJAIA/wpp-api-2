import { Request, response, Response } from "express";
import { LeadCreate } from "../../application/lead.create";
import * as path from 'path';
import * as fs from 'fs';

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };
  public sendQr = async ( res: Response) => {
    const qr = fs.readFileSync('../../../tmp/qr.svg');
    console.log(qr);
    res.send({ message: 'Hola okay' });
  };
}

export default LeadCtrl;
