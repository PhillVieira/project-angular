<?php

class Prato extends Eloquent {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'prato';
    
    protected $fillable = array('nome', 'desc','valor');

}
