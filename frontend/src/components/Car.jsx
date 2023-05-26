import { Badge, Box, Flex, Image, Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure, } from "@chakra-ui/react";

function Car({car}){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Box p='40px 10px' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' key={car._id}>
           <Image maxW='100%' src='https://i.ibb.co/mq25B4c/fronx-exterior-right-front-three-quarter-4.jpg' />
           <Flex gap='20px' fontSize='18px' fontWeight='600' mb='10px' p='0px 20px'>
           <Text>{car.name}</Text>
           <Text>Model {car.model_year}</Text>
           </Flex>
           <Flex mt='20px' gap='10px' flexWrap='wrap' justifyContent='center'>
            <Badge p='5px 10px'>
                Power {car.power}
            </Badge>
            <Badge p='5px 10px'>
                Mileage {car.mileage}
            </Badge>
            <Badge p='5px 10px'>
                Max Speed {car.max_speed}
            </Badge>
           </Flex>
           <Flex justifyContent='space-between' flexWrap='wrap'>
            <Badge cursor='pointer' p='10px 30px' mt='10px' onClick={onOpen} >
              Inventory
           </Badge>
           <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Inventory Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody p='30px 20px'>
            <Text>KMs : {car.inventry.KMs}</Text>
            <Text>Accident : {car.inventry.accident}</Text>
            <Text>Major Scratch : {car.inventry.major_scratches}</Text>
            <Text>Original Paint : {car.inventry.original_paint?'Yes':'No'}</Text>
            <Text>Registration Place : {car.inventry.registration_place}</Text>
            <Text>Colours Available : {car.colors.join(',')}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
            <Badge p='10px 30px' mt='10px' >
              Price : {car.price} ₹
           </Badge>
           </Flex>
         </Box>
}

export default Car