import { Request, Response } from "express";
import { tCategory, tCreateCategory } from "../../interfaces/category.interfaces";
import createCategoryService from "../../services/category/createCategory.service";
import listCategoriesService from "../../services/category/listCategories.service";

const createCategory = async (request: Request, response: Response) => {
    const data: tCreateCategory = request.body;
  
    const newCategory = await createCategoryService(data);
  
    return response.status(201).json(newCategory);
  };

  

const categoriesList = async (request: Request, response: Response) => {

    const categoriesList: Array<tCategory> = await listCategoriesService()

    return response.status(200).json(categoriesList)
}



export default { createCategory, categoriesList }