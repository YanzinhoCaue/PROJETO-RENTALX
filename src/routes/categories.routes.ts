import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();


const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const categoryAlreadyExist = categoriesRepository.findByName(name);
  if(categoryAlreadyExist) {
    return res.status(400).json({ error: "Category Already exists!" })
  }
  categoriesRepository.create({ name, description });
  return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
  const allcategories = categoriesRepository.list()
  return res.json(allcategories);
})

export { categoriesRoutes }