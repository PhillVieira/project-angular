<?php

class PratoController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function index()
	{
		return View::make('hello');
	}
        public function create(){
            
            return dd($_POST);
            
            $prato = new Prato;
            $prato->nome = "Macarronada";
            $prato->descricao = "massa,queijo,tomate";
            $prato->valor = "34,90";
        }
}
