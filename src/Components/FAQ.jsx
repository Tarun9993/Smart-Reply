import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div className="bg-[#eef2ff]">
      <Container maxWidth="md" sx={{ py: 5 }} className="px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold font-mono tracking-wide underline text-center mb-10">
          Frequently Asked Questions
        </h1>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">What is the Email Reply Generator?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The Email Reply Generator is a tool that helps you create quick,
              professional, or friendly replies to emails. You just paste the
              original email, choose a tone, and generate a reply instantly.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">Do I need to sign up to use this tool?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, you can use the tool without creating an account. However,
              future versions may include login for saving replies.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">Is the generated reply editable?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, once the reply is generated, you can edit it inside the text
              box before sending it.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">Does it work for all types of emails?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, it can help with professional emails, casual messages, customer support, or personal communication.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">Can I choose the tone of the reply?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can select different tones such as Professional, Casual, Friendly, or Polite to match the style you want.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-3 p-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="text-[#000000]">Is this tool free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, the basic version is free. In the future, premium features may be added.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
