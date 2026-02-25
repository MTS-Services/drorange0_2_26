<?php 
namespace App\Services;

use App\Models\HomeService;

class HomeServiceService
{
 
    public function __construct(public HomeService $model)
    {
        
    }
    public function latest($limit = 6)
    {
        return $this->model->latest()->take($limit)->get();
    }
    public function getQuery()
    {
        return $this->model->query();
    }
    public function find($id, $column = 'id')
    {
        return $this->model->where($column, $id);
    }   
    public function create($data){

       return $this->model->create($data);

    }

    public function update($id, $data){

        return $this->model->where('id', $id)->update($data);

    } 

    public function delete($id){

        return $this->model->where('id', $id)->delete();
        
    }
}