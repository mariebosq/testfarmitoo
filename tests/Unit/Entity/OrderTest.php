<?php


namespace App\Tests\Unit\Entity;

use App\Entity\Order;
use App\Entity\Item;
use PHPUnit\Framework\TestCase;

class OrderTest extends TestCase
{
    public function testGetItems()
    {
        $item1 = new Item('Cuve à gasoil', 1);
        $item2 = new Item('Nettoyant pour cuve', 3);
        $item3 = new Item('Piquet de clôture', 5);
  
        $items = array($item1, $item2, $item3);

        $order = new Order($items);

        $this->assertSame($items, $order->getItems());
    }
}
