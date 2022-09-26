import { request,response } from "express";
import Home from "../models/HomeModel.js";

export const getHome = async (req, res) => {
    try {
      const response = await Home.findAll();
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  export const getHomeById = async (req, res) => {
    try {
      const response = await Home.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  export const createHomeEntry = async (req, res) => {
    try {
      await Home.create(req.body);
      res.status(201).json({ msg: "Home Entry Created" });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const updateHomeEntry = async (req, res) => {
    try {
      await Home.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Home Entry Updated" });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const deleteHome = async (req, res) => {
    try {
      await Home.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({ msg: "Home Entry Deleted" });
    } catch (error) {
      console.log(error.message);
    }
  };