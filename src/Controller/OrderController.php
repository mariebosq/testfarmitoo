<?php

namespace App\Controller;

use App\Entity\Product;
use App\Entity\Promotion;
use App\Entity\Order;
use App\Entity\Contact;
use App\Form\OrderType;
use App\DataFixtures\AppFixtures;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class OrderController extends AbstractController 
{
    public function order(Request $request): Response
    {
        $fixtures = new AppFixtures();
        $order = $fixtures->loadOrder();

        $contact = new Contact();
     
        $form = $this->createForm(OrderType::class, $contact);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
        
            $contact = $request->request->get('order');

            return $this->render('order/validation.html.twig', [
                'contact' => $contact
            ]);
        }
        
        return $this->render('order/order.html.twig', [
            'order' => $order,
            'form' => $form->createView()
        ]);
    }
}
