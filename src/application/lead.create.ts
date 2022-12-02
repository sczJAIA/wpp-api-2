import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  // private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories:  LeadExternal) {
    const leadExternal = respositories;
    // this.leadRepository = leadRepository;
    this.leadExternal = leadExternal;
  }

  public async sendMessageAndSave({ message, phone }: { message: string; phone: string; }) {
    const responseExSave = await this.leadExternal.sendMsg({ message, phone });//TODO enviar a ws
    // const responseDbSave = await this.leadRepository.save({ message, phone });//TODO DB
    return { responseExSave };
  }
}
