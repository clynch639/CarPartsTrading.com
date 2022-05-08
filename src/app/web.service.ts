import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {

    private tyreID : any;
    private oilID:any;
    private vintageID:any;
    private brakeID:any;
    private batteryID:any;
    private filterID:any;

    constructor(private http: HttpClient) {

    }

    tyre_list: any;
    oil: any

    getTyres(page: number) {
        return this.http.get('http://localhost:5000/api/v1.0/tyres?pn=' + page);
    }

    getTyre(id: any) {
        this.tyreID = id;
        return this.http.get('http://localhost:5000/api/v1.0/tyres/' + id);
    }

    getOils(page: number) {
        return this.http.get('http://localhost:5000/api/v1.0/oils?pn=' + page);
    }

    getOil(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/oils/'+ id);
    }


    getBrakes(page: number){
        return this.http.get('http://localhost:5000/api/v1.0/brakes?pn=' + page).toPromise();
    }

    getBrake(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/brakes/'+ id).toPromise();
    }

    getFilters(page: number){
        return this.http.get('http://localhost:5000/api/v1.0/filters?pn=' + page).toPromise();
    }

    getFilter(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/filters/'+ id).toPromise();
    }

    getVintages(page: number ){
        return this.http.get('http://localhost:5000/api/v1.0/vintages?pn=' + page).toPromise();
    }

    getVintage(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/vintages/'+ id).toPromise();
    }

    getBatteries(page:number){
        return this.http.get('http://localhost:5000/api/v1.0/batteries?pn=' + page).toPromise();
    }

    getBattery(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/batteries/'+ id).toPromise();
    }

    getMyAds() {
        return this.http.get('http://localhost:5000/api/v1.0/myads').toPromise();
    }

    getMyAd(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/myads/'+ id).toPromise();
    }

    getTyreReviews(id: any) {
        return this.http.get('http://localhost:5000/api/v1.0/tyres/' + id + '/reviews').toPromise();
    }

    
    getOilReviews(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/oils/'+ id + '/reviews').toPromise();
    }

    getFilterReviews(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/filters/'+ id + '/reviews').toPromise();
    }

    getVintageReviews(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/vintages/'+ id + '/reviews').toPromise();
    }

    getBrakeReviews(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/brakes/'+ id + '/reviews').toPromise();
    }

    getBatteryReviews(id:any) {
        return this.http.get('http://localhost:5000/api/v1.0/batteries/'+ id + '/reviews').toPromise();
    }


    postTyreReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/tyres/' +
                               this.tyreID + '/reviews', postData);
    }

    postOilReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/oils/' +
                               this.oilID + '/reviews', postData);
    }

    postFilterReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/filters/' +
                               this.filterID + '/reviews', postData);
    }

    postBrakeReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/brakes/' +
                               this.brakeID + '/reviews', postData);
    }

    postBatteryReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/batteries/' +
                               this.batteryID + '/reviews', postData);
    }

    postVintageReview(review: any){
        let postData = new FormData();
        postData.append("username", review.username);
        postData.append("comment", review.comment);
        postData.append("stars", review.stars);

        return this.http.post('http://localhost:5000/api/v1.0/vintages/' +
                               this.vintageID + '/reviews', postData);
    }

    deleteTyreReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/tyres/' + id + '/reviews/' + review_id);
    }

    deleteOilReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/oils/' + id + '/reviews/' + review_id);
    }

    deleteFilterReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/filters/' + id + '/reviews/' + review_id);
    }

    deleteBrakeReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/brakes/' + id + '/reviews/' + review_id);
    }

    deleteBatteryReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/batteries/' + id + '/reviews/' + review_id);
    }

    deleteVintageReview(id: any, review_id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/vintages/' + id + '/reviews/' + review_id);
    }

    async SearchBrake(val: any){
        return this.http.get("http://localhost:5000/api/v1.0/search/brake/" + val);
    }

    async SearchTyre(val: any){
        return this.http.get("http://localhost:5000/api/v1.0/search/tyre/" + val);
    }

    DeleteMyAd(id: any){
        return this.http.delete('http://localhost:5000/api/v1.0/myads/' + id);
    }

    





   




}

