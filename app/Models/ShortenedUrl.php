<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ShortenedUrl extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'stub'];

    static function build(string $url)
    {
        do {
            $stub = Str::random(5);
            $exists = ShortenedUrl::where('stub', $stub)->get();
        } while (!$exists->isEmpty());

        return self::create([
            'url' => $url,
            'stub' => $stub
        ]);
    }
}
