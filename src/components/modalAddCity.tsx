import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { Container, TextField } from '@mui/material'
import { fetchCurrentWeather } from '../localStorage/thunks/fetchCurrentWeather'
import { useCustomDispatch } from '../hooks/store'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
}

interface Props {
    open: boolean
    onClose: any
}

const ModalAddCity = ({ open, onClose }: Props) => {
    const [input, setInput] = useState('')

    const dispatch = useCustomDispatch()
    function load(city: string) {
        dispatch(fetchCurrentWeather(city))
        onClose()
    }
    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Виберіть місто
                    </Typography>
                    <Container>
                        <TextField
                            id="outlined-basic"
                            label="..."
                            variant="outlined"
                            sx={{ mt: '1rem' }}
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                    </Container>
                    <Box
                        sx={{
                            mt: '1rem',
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <Button
                            variant="outlined"
                            size="small"
                            endIcon={<SendIcon />}
                            onClick={() => load(input)}
                        >
                            Ok
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default ModalAddCity
