import { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const EmailGenerator = () => {
  const [emailContent, setEmailContent] = useState("");
  const [tone, setTone] = useState("");
  const [generateReply, setGenerateReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("https://email-writer-backend-artv.onrender.com/api/email/generate", {
        emailContent,
        tone,
      });
      setGenerateReply(
        typeof response.data === "string"
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError("Failed to generate email reply. Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);


  return (
    <div className="min-h-screen bg-[#eef2ff] py-10">
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <h1 className="text-3xl md:text-4xl font-bold font-mono tracking-wide underline text-center mb-10">
          Email Reply Generator
        </h1>

        <Grid container spacing={1} className="px-2">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 w-full">

            <Grid item xs={12} md={6} className="flex w-full">
              <Paper
                className="w-full md:w-[500px] lg:w-[600px] h-auto md:h-[500px] lg:h-[600px]"
                sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={15}
                  variant="outlined"
                  label="Original Email Content"
                  value={emailContent || ""}
                  onChange={(e) => setEmailContent(e.target.value)}
                  sx={{ mb: 2 }}
                  className="bg-[#FFFFFF]"
                />
                <FormControl
                  sx={{
                    mb: 1,
                    width: "100%",
                    maxWidth: { xs: "100%", sm: 360, md: 500 },
                    boxSizing: "border-box",
                  }}
                >
                  <InputLabel>Tone (Optional)</InputLabel>

                  <Select
                    value={tone || ""}
                    label="Tone (Optional)"
                    onChange={(e) => setTone(e.target.value)}
                    sx={{
                      width: "100%",
                      minWidth: 0,
                    }}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          maxWidth: "100%",
                          boxSizing: "border-box",
                        },
                      },
                    }}
                  >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="Professional">Professional</MenuItem>
                    <MenuItem value="Casual">Casual</MenuItem>
                    <MenuItem value="Friendly">Friendly</MenuItem>
                    <MenuItem value="Politely">Politely</MenuItem>
                  </Select>
                </FormControl>



                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={!emailContent || loading}
                  fullWidth
                  sx={{ py: 2, fontSize: "1rem" }}
                >
                  {loading ? <CircularProgress size={25} /> : "Generate Reply"}
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} className="flex w-full">
              <Paper
                className="w-full md:w-[500px] lg:w-[600px] h-auto md:h-[500px] lg:h-[600px]"
                sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={17}
                  variant="outlined"
                  label="Generated Reply"
                  value={generateReply || ""}
                  inputProps={{ readOnly: true }}
                />
                <Button
                  variant="outlined"
                  sx={{ mt: 2, py: 2, fontSize: "1rem" }}
                  onClick={() => navigator.clipboard.writeText(generateReply)}
                  fullWidth
                >
                  Copy to Clipboard
                </Button>
              </Paper>
            </Grid>
          </div>
        </Grid>

        <ToastContainer position="top-right" autoClose={3000} />
      </Container>
    </div>
  );
};

export default EmailGenerator;
