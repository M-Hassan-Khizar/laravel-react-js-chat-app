<?php

namespace App\Models;

use Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;



class Message extends Model
{
    use HasFactory;
    protected $fillable =[
        'message',
        'sender_id',
        'receiver_id'
    ];


    public function getCreatedAtAttribute($data)
    {
return Carbon::parse($data)->diffForHumans();
    }   public function getUpdatedAtAttribute($data)
    {
return Carbon::parse($data)->diffForHumans();
    }

}
