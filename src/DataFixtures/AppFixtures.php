<?php

namespace App\DataFixtures;

use App\Entity\Product;
use App\Entity\Promotion;
use App\Entity\Item;
use App\Entity\Order;

class AppFixtures
{
    public function loadProducts() {

        $product1 = new Product('Cuve à gasoil', 250000, 'Farmitoo');
        $product2 = new Product('Nettoyant pour cuve', 5000, 'Farmitoo');
        $product3 = new Product('Piquet de clôture', 1000, 'Gallagher');

        $products = [$product1, $product2, $product3];

        return $products;
    }

    public function loadPromotions() {

        $promotion1 = new Promotion(50000, 8, false);

        return $promotion1;
    }

    public function loadItems() {

        $products = $this->loadProducts;

        $item1 = new Item($products[0], 1);
        $item2 = new Item($products[1], 3);
        $item3 = new Item($products[2], 5);

        $items = [$item1, $item2, $item3];

        return $items;
    }

    public function loadOrder() {

        $items = $this->loadItems;
        
        $order = new Order($items);

        return $order;
    }
}