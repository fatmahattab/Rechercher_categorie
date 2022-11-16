import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produits.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  styles: [
  ]
})
export class RechercheParCategorieComponent implements OnInit {
  produits!:Produit[];
  Categories !: Categorie[];
  IdCategorie!:number;

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.Categories=this.produitService.listeCategories();
    this.produits=[];
  }

  onChange(){
    console.log(this.IdCategorie)
    this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
  }
  supprimerProduit(p: Produit)
  {
    let conf = confirm("Etes-vous sûr ?");
     if (conf)
     {
     this.produitService.supprimerProduit(p);
     this.produits=this.produitService.rechercherParCategorie(this.IdCategorie);
    }
  }

}
