<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(FaqTableSeeder::class);
        $this->call(InitialDummyData::class);
        \Artisan::call('passport:client', [
            '--password' => true,
            '-n'    => true,
        ]);
    }
}
