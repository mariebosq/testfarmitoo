<?php


namespace App\Tests\Unit\Entity;


use App\Entity\Item;
use App\Entity\Product;
use PHPUnit\Framework\TestCase;

class ItemTest extends TestCase
{
    public function testGetProduct()
    {
        $product = new Product('Cuve à gasoil', 100, 'Farmitoo');
        $item = new Item($product, 1);

        $this->assertSame($product, $item->getProduct());
    }
    public function testGetQuantity()
    {
        $product = new Product('Cuve à gasoil', 100, 'Farmitoo');
        $item = new Item($product, 3);

        $this->assertSame(3, $item->getQuantity());
    }
}
