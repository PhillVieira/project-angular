<?php

class PratoTableSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('prato')->delete();
                
                Prato::create(array(
                   'nome'=>'Macarrao' ,
                    'desc'=>'Muito bom',
                    'valor'=>35.60
                ));
	}

}
