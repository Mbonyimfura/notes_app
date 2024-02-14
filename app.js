
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {addNote,removeNote,listNotes,readNote} from './notes.js';

// Create add command
yargs(hideBin(process.argv)).command({
    command:'add',
    describe:'Add a new note',
    builder:{
       title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
       },
       body:{
        describe:'Title description',
        demandOption:true,
        type:'string'
       }
    },
    handler:(argv)=>{
       addNote(argv.title,argv.body);
    },
}).argv

//Remove a note
 yargs(hideBin(process.argv)).command({
    command:'remove',
    describe:'Removing a note',
    builder:{
     title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
     }
    },
    handler: (argv) =>{
       removeNote(argv.title)
    }
 }).argv;
//list a notes
yargs(hideBin(process.argv)).command({
    command:'list',
    describe:'List a note',
    handler:()=>{
       listNotes()
    }
}).argv
 // read a note
 yargs(hideBin(process.argv)).command({
      command:'read',
      describe:'Read a note',
      builder:{
        title:{
        describe:'Note title',
        demandOption:true
        }
      },
      handler: (argv)=>{
       readNote(argv.title)
      }
 }).argv
 