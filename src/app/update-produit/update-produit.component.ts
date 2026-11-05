import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-update-produit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent implements OnInit {
  currentProduit  = new Produit();
 updatedCatId! : number;

  
  constructor(private activatedRoute: ActivatedRoute,private router :Router,private produitService: ProduitService) { }

ngOnInit(): void {
  this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentProduit = prod; } ) ;

}
updateProduit() {
this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
this.router.navigate(['produits']); }
);
}
}
