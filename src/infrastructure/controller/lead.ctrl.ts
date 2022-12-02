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
    fs.readFile('../../../tmp/qr.svg', (err, data) => {
      if (data) {
        // res.sendFile(data);
        console.log(data); 
      }
      console.log(err);
      res.send({ message: 'Hola ok' });
    });
  };
}

export default LeadCtrl;
