<?php

// member registration
Route::post('/register', 'Auth\RegisterController@register')->name('register');
