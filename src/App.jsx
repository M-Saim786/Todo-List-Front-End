import React, { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Box, Button, List, ListItem, Typography, TextField, OutlinedInput, InputLabel } from '@mui/material'
import bgImg from './bgImg.png'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
// import { addTodo } from './Redux/reducers/Reducer'
import { addTodo, deleteTodo, getAllTodo } from './Redux/Action'
import Swal from 'sweetalert2'
function App() {
  const dispatch = useDispatch()
  // const [get_Todo, setget_Todo] = useState([])
  const [Todo, setTodo] = useState("")
  const todo = useSelector((state) => state.todo.todo)
  console.log(todo)
  // console.log(todo.todo)
  const allTodos = todo.data
  console.log(allTodos)
  const AddTodo = () => {
    if (Todo && Todo !== null) {


      dispatch(addTodo(Todo))
      setTimeout(() => {
        dispatch(getAllTodo())
      }, 1000);

    }
    else {
      Swal.fire("Error", "Todo Couldn't be Null", "error")
    }
  }

  const DeleteTodo = (id) => {
    console.log(id)
    dispatch(deleteTodo(id))
    setTimeout(() => {
      dispatch(getAllTodo())
    }, 1000);
  }

  const [Todos, setTodos] = useState([])
  useEffect(() => {
    if (allTodos) {
      setTodos(allTodos)
    }
  }, [allTodos])


  useEffect(() => {
    dispatch(getAllTodo())

  }, [dispatch])

  return (
    <>
      <Box sx={{
        width: { lg: "100%", md: "100%", sm: "105%", xs: "105%" },
        minHeight: { lg: "100vh", md: "100vh", sm: "auto", xs: "auto" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        backgroundImage: `url(${bgImg})`,
        py: { lg: 0, md: 0, sm: 1, xs: 2 },
        // margin: "30px auto",#1b1717b8
      }} className='mainDiv'>
        <Box className="container" sx={{
          width: { lg: "60%", md: "60%", sm: "100%", xs: "100%" },
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          minHeight: { lg: "80vh", md: "90vh", sm: "100vh", xs: "100vh" },
        }}>
          <InputLabel sx={{ mb: "10px", fontWeight: 400, color: "white", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" }, p: 2 }}>
            Empower your ideas with effortless Note-taking..!
          </InputLabel>
          <Box className="todo" sx={{
            px: 2, py: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
            // border: "1px solid red"
          }}>
            <Box sx={{ width: "70%", }}>

              <OutlinedInput
                // type='number'
                sx={{ height: { lg: "6vh", md: "6vh", sm: "5vh", xs: "5vh" }, width: "100%", backgroundColor: "white", }}
                margin='normal'
                value={Todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </Box>
            <Box>
              <Button variant='contained' sx={{ textTransform: "capitalize", mt: 2, fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "12px" }, mt: 0 }} onClick={AddTodo}>Add Todos</Button>
              {/* <button onClick={show_todo}>Show Todo</button> */}
            </Box>
          </Box>
          <Box className="showTodo" >
            <List sx={{ p: 1 }}>
              {Todos &&
                Todos.map((v, i) => {
                  return (
                    <>
                      <ListItem sx={{
                        position: "relative",
                        minHeight: { lg: "15vh", md: "12vh", sm: "10vh", xs: "10vh" },
                        display: "flex",
                        justifyContent: "space-between",
                        height: "auto",
                        alignItems: "baseline"
                      }} key={v._id}>
                        <Box sx={{ width: { lg: "80%", md: "80%", sm: "70%", xs: "70%" } }}>
                          <Typography>
                            {v.todo}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: { lg: 0, md: 0, sm: 1, xs: 1 } }}>
                          <Box sx={{
                            display: "flex", justifyContent: "center", width: "fit-content"
                            // , border: "1px solid red" 
                          }}>
                            {/* <Typography sx={{ mr: 1 }}>
                              <EditIcon />
                            </Typography> */}
                            <Typography sx={{ color: 'red' }} onClick={() => DeleteTodo(v._id)}>
                              <RemoveCircleOutlineIcon />
                            </Typography>
                          </Box>

                          <Box sx={{ textAlign: "right", width: "fit-content", position: "absolute", right: "10px", bottom: "5px" }}>
                            <Typography sx={{
                              fontSize: "12px", color: "#808080",
                              fontSize: { lg: "12px", md: "12px", sm: "10px", xs: "10px" },
                              // border: "1px solid red"
                            }}>
                              Dated: {v.createdAt.slice(0, 10)}
                            </Typography>
                          </Box>
                        </Box>

                      </ListItem >
                    </>
                  )
                })
              }
            </List>
          </Box>
        </Box>
      </Box >
    </>
  );
}

export default App;


// //                       