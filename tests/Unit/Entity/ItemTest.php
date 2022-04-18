<?php


namespace App\Tests\Unit\Entity;


use App\Entity\Item;
use PHPUnit\Framework\TestCase;

class ItemTest extends TestCase
{
    public function testGetProduct()
    {
        $item = new Item('Cuve à gasoil', 1);

        $this->assertSame('Cuve à gasoil', $item->getProduct());
    }
    public function testGetQuantity()
    {
        $item = new Item('Cuve à gasoil', 3);

        $this->assertSame(3, $item->getQuantity());
    }
}
