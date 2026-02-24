<?php 
namespace App\Services;

use App\Models\SiteSetting;

class SiteSettingService
{
    public function __construct(protected SiteSetting $model)
    {
        
    }

    public function getSiteSetting()
    {
        return $this->model::first();
    }

    public function find($id, $columns = 'id')
    {
       return $this->model->where('id', $id)->first();
    }

    public function updateSiteSetting($data)
    {
        return $this->model::first()->update($data);
    }
}