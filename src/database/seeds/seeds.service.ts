import { Injectable } from '@nestjs/common';
import { _2022310979320001_addFullPokedexToDatabase } from './2022310979320001_addFullPokedexToDatabase.service';

// #seeds

// import { _20210612084100_AddUniqueConstraintToCompanyLoanConfigurationService } from '../../../seeds/services/20210612084100_AddUniqueConstraintToCompanyLoanConfiguration.service';

@Injectable()
export class SeederService {
  constructor(
    private _2022310979320001_addFullPokedexToDatabase: _2022310979320001_addFullPokedexToDatabase,
  ) {}

  async populateDatabase() {
    try {
      return this._2022310979320001_addFullPokedexToDatabase.up();
    } catch (err) {
      return err.message;
    }
  }
}
