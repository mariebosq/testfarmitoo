<?php


namespace App\Tests\Unit\Entity;


use App\Entity\Promotion;
use PHPUnit\Framework\TestCase;

class PromotionTest extends TestCase
{
    public function testGetMinAmount()
    {
        $promotion = new Promotion(50000, 8, false);
        
        $this->assertSame(50000, $promotion->getminAmount());
    }
    public function testGetReduction()
    {
        $promotion = new Promotion(50000, 8, false);

        $this->assertSame(8, $promotion->getReduction());
    }
    public function testGetFreeDelivery()
    {
        $promotion = new Promotion(50000, 8, false);

        $this->assertSame(false, $promotion->getfreeDelivery());
    }
}
