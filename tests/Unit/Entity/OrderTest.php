<?php

namespace App\Tests\Unit\Entity;

use App\Entity\Order;
use App\Entity\Item;
use App\Entity\Product;
use PHPUnit\Framework\TestCase;

class OrderTest extends TestCase
{
    public function testGetItems()
    {
        $product1 = new Product('Cuve à gasoil', 250000, 'Farmitoo');
        $product2 = new Product('Nettoyant pour cuve', 5000, 'Farmitoo');
        $product3 = new Product('Piquet de clôture', 1000, 'Gallagher');

        $item1 = new Item($product1, 1);
        $item2 = new Item($product2, 3);
        $item3 = new Item($product3, 5);
  
        $items = array($item1, $item2, $item3);

        $order = new Order($items);

        $this->assertSame($items, $order->getItems());
    }
}
