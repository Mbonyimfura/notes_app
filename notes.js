import fs from 'fs'
import chalk from 'chalk'
import { title } from 'process'
export const getNotes = (title,body) =>{
    return {title,body}
}

export const addNote = (title, body) =>{
      const notes = loadNotes();
      const duplicateNote = notes.find(note =>note.title === title)
      if( !duplicateNote){
        notes.push({
            title:title,
            body:body
          })
          saveNotes(notes)
          console.log(chalk.green.inverse('Notes saved successfully!'))
      }else{
        console.log(chalk.red.inverse('Note title already taken!'))
      }
     
}
export const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Notes:'))
    notes.forEach(note => {
    console.log(note.title)
    });
}
export const readNote = (title) =>{
    const notes = loadNotes();
    const noteFound = notes.find(note => note.title === title);
    if(noteFound){
        console.log(chalk.inverse(noteFound.title))
        console.log((noteFound.body))
    }else{
        console.log(chalk.red.inverse('No note found'))
    }
}
export const removeNote = (title) =>{
    const notes = loadNotes();
    const notesToKeep = notes.filter(note =>{
        return note.title != title
    }) 
    if(notes.length > notesToKeep.length ){
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note removed successfully'))
    }else{

        console.log(chalk.bgRed('No note found!'))
    }
   
}
export const saveNotes = (notes) =>{
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON)
}
export const loadNotes =  () =>{
 try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
 }catch (e){
    return []
 }
}

