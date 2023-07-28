const express = require("express");
const Application = require('../models/applicationModel')
const mongoose = require('mongoose')

require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
  });
  const openai = new OpenAIApi(configuration);
const getSummary = async(req,res) => {
    try {
          const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "user",
                "content":  `Summarize each section. Could you please divide the summary into sections with headers` 
                + `"`+ (req.body.data) + `"`
              }
            ],
            temperature: 0.7,
            max_tokens: 1024,
        });
        console.log(response.data.choices[0])
        return res.status(200).json({
          success: true,
          data: response.data.choices[0].message.content,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.response
            ? error.response.data
            : "There was an issue on the server",
        });
      }

    }

  const getInterviewQuestions = async(req,res) => {
    
      try {
          const response = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [
                {
                  "role": "user",
                  "content": "Create a list of " + req.body.number + 
                  " questions for a "+ req.body.interviewType + " position." +
                  "Ensure that they are technical questions and test concepts and there is an extra newline between each question"
              }
            ],
              temperature: 0.5,
              max_tokens: 2000,
          });
          var temp = response.data.choices[0].message.content.replace(/^\s+/, '') 
          
          return res.status(200).json({
            success: true,
            data: temp,
          });
        
        } catch (error) {
          console.log(error.response.data);
          return res.status(400).json({
            success: false,
            error: error.response
              ? error.response.data
              : "There was an issue on the server",
          });
        }
  }

  const addApplication = async(req,res) => {
    const {jobTitle, positionType, company, dateApplied, applicationDeadline, link, jobDescription} = req.body
    
    date_applied = dateApplied ? new Date(dateApplied): ""
    application_Deadline = applicationDeadline ? new Date(applicationDeadline): ""

    // add doc to db
    try{
        const application = await Application.create({jobTitle, positionType, company, date_applied, application_Deadline, link, jobDescription})
        res.status(200).json(application)
    } catch(error){
        res.status(400).json({error:error.message})

    }
  }

  const getApplications = async(req,res) => {deleteApplication
    try {
      console.log("test")
      const applications = await Application.find().sort({ updatedAt: -1 });;
      return res.status(200).json({ success: true, data: applications });
    } catch (error) {
      console.error(error);
      return res.status(404).json({ success: false, error: 'Not Found' });
    }
    
  }
  const deleteApplication = async(req,res) => {
    try {
      const {id} = req.params
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})
      }
      const application = await Application.findOneAndDelete({_id: id})
      if(!application){
          return res.status(404).json({error: "No such Application"})
      }
      console.log(application)
      res.status(200).json(application)
    }
    catch(error){
      console.error(error)
      return res.status(404).json({ success: false, error: 'Not Found' });
    }
    
  }
  const updateApplication = async(req, res) => {
    console.log(req)
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Application'})
    }
    const application = await Application.findOneAndUpdate({_id: id}, {...req.body})
    if(!application){
        return res.status(404).json({error: "No such Application"})
    }
    res.status(200).json(application)
  }
    

module.exports = {
    getSummary,
    getInterviewQuestions,
    addApplication,
    getApplications,
    deleteApplication,
    updateApplication
}