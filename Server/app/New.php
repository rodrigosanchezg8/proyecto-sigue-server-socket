<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class New extends Model
{
    protected $fillable = [
      "title",
      "description",
      "image",
      "created_by",
    ];

    public function created_by()
    {
      return $this->belongsTo('App\User', 'created_by');
    }
}
