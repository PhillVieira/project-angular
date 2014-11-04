<?php

use Illuminate\Auth\PratoTrait;
use Illuminate\Auth\PratoInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class Prato extends Eloquent implements PratoInterface, RemindableInterface {

	use PratoTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'pratos';

	

}
