<?php

namespace App\Form;

use App\Entity\Contact;
use App\Form\PostalAddressType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;


class OrderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Nom', TextType::class, array(
                'mapped' => false,
                'attr' => ['class' => 'form-control']
            ))
            ->add('Adresse', PostalAddressType::class, array(
                'mapped' => false
            ))
            ->add('E-mail', EmailType::class, array(
                'mapped' => false,
                'attr' => ['class' => 'form-control']
            ))
            ->add('Envoyer', SubmitType::class, array(
                'attr' => ['class' => 'text-center btn border-step-cart back-green text-white fw-bold my-3 p-3 d-block']
            ))
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}