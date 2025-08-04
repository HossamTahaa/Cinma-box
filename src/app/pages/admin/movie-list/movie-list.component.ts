 import { Component ,OnInit} from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
    movies:any[]= [];
    constructor(private movieService :MovieService ,private router :Router){}
    searchQuery: string = '';
    
    ngOnInit(): void {
      this.movieService.getMoiveStream().subscribe((data)=>{
        this.movies=data.results;
      })
    }
    
    nextPage(){
      this.movieService.nextPage();
    }   
    
    prevPage():void{
      this.movieService.prevPage();
    }
    
    goToDeatils(movieId:number): void {
      this.router.navigate(['/movie-details',movieId])
    }
    
      searchMovies() { 
        if(this.searchQuery.trim()===''){
          this.movieService.getMoiveStream().subscribe((data)=>{
            this.movies=data.results
           });
        }else { 
           this.movieService.searchMovies(this.searchQuery).subscribe((data)=> {
            this.movies=data.results;
           } )
        }
      }
     
}



    //  loadMoives(){
    //   this.MovieService.getMoiveStream(this.page).subscribe(res=>{
    //     this.movies=[...this.movies,...res.results]

    //   })
    //  }
    //  loadNextPage(){
    //   this.page++;
    //   this.loadMoives();
    //  }
      