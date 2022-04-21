<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Promotion;
use App\DataFixtures\AppFixtures;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController 
{
    public function index(): Response
    {
        $fixtures = new AppFixtures();
        $fixturesProducts = $fixtures->loadProducts();
        $fixturesPromotion = $fixtures->loadPromotions();

        $promotion1 = new Promotion(50000, 8, false);

        // Je passe une commande avec
        // Cuve à gasoil x1
        // Nettoyant pour cuve x3
        // Piquet de clôture x5

        return $this->render('cart/cart.html.twig', [
            'products' => $fixturesProducts,
            'promotion' => $fixturesPromotion
        ]);
    }
}
