<?php


namespace App\Tests\Functional;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class OrderControllerTest extends WebTestCase
{
    public function testOrder(): void
    {
        $client = self::createClient();
        $client->enableProfiler();
    
        $client->request('GET', '/order');
        $this->assertTrue($client->getResponse()->isSuccessful());

    }
}
