import { Request, response, Response } from "express";
import { LeadCreate } from "../../application/lead.create";
import * as fs from 'fs';

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone })
    res.send(response);
  };
  public sendQr = async ({ body }: Request, res: Response) => {
    const { message, phone } = body;
    const path = `${process.cwd()}/tmp`;
    // const qr = fs.readFileSync(`${path}/qr.svg`);
    res.sendFile(`${path}/qr.svg`);
  };
}

export default LeadCtrl;
