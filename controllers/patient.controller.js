const patientService = require('../services/patient.service');
const Joi = require('joi');
const makeResponse = require('../utils/response.util');

module.exports = {

    createPatient: async (req, res) => {
        try {
            const input = req.body;

            const contactDetailsSchema = Joi.object().keys({
                state: Joi.string().required(),
                city: Joi.string().required(),
                address: Joi.string().required(),
                area: Joi.string().required(),
                complete_address: Joi.string().required(),
                pin_code: Joi.number().required(),
                mobile: Joi.number().required()
            }).required();

            const AdmissionDetailsSchema = Joi.object().keys({
                doa: Joi.date().required(),
                uhid: Joi.string().required(),
            }).required();

            const DiagnosisDetailsSchema = Joi.object().keys({
                diagnosis_note: Joi.string().required(),
            }).required();

            const RtpcrReports = Joi.object().keys({
                test_date: Joi.date().optional(),
                result: Joi.string().optional()
            })
            const CovidTreatment = Joi.object().keys({
                number_of_episode: Joi.number().greater(0).optional(),
                episode_date: Joi.date().optional(),
                history: Joi.string().optional(),
                history_type: Joi.string().optional(),
                negative_date: Joi.date().optional()
            })
            const Dose = Joi.object().keys({
                number_of_dose: Joi.number().greater(0).optional(),
                dose1_date: Joi.date().optional(),
                dose2_date: Joi.date().optional()
            })
            const DrugDetails = Joi.object().keys({
                remedisvir: Joi.string().valid("YES", "NO").optional(),
                remedisvir_duration: Joi.number().optional(),
                tocilizumab: Joi.string().valid("YES", "NO").optional(),
                tocilizumab_duration: Joi.number().optional(),
                ventilation: Joi.string().valid("YES", "NO").optional(),
                ventilation_duration: Joi.number().optional(),
                o2: Joi.string().valid("YES", "NO").optional(),
                o2_duration: Joi.number().optional(),
                corticosteroids: Joi.string().valid("YES", "NO").optional(),
                corticosteroids_method: Joi.string().valid("ORAL", "IV").optional(),
                dose: Joi.number().optional()
            })

            const CovidDetailsSchema = Joi.object({
                rtpcr: RtpcrReports,
                covidTreatment: CovidTreatment,
                doseDetails: Dose,
                drugDetails: DrugDetails
            })

            const MucorDetailsSchema = Joi.object().keys({
                result: Joi.string().optional(),
                date_of_symptoms: Joi.date().optional(),
                nasal_stuffiness: Joi.string().valid("YES", "NO").optional(),
                foul_smell: Joi.string().valid("YES", "NO").optional(),
                epistaxis: Joi.string().valid("YES", "NO").optional(),
                nasal_discharge: Joi.string().valid("YES", "NO").optional(),
                nasal_mucosal: Joi.string().valid("YES", "NO").optional(),
                facial_oedema: Joi.string().valid("YES", "NO").optional(),
                facial_discoloration: Joi.string().valid("YES", "NO").optional(),
                reginal_pain: Joi.string().valid("YES", "NO").optional(),
                facial_pain: Joi.string().valid("YES", "NO").optional(),
                worsening_headache: Joi.string().valid("YES", "NO").optional(),
                proptosis: Joi.string().valid("YES", "NO").optional(),
                loss_vision: Joi.string().valid("YES", "NO").optional(),
                facial_paraesthesia: Joi.string().valid("YES", "NO").optional(),
                sudden_ptosis: Joi.string().valid("YES", "NO").optional(),
                ocular_motlilty: Joi.string().valid("YES", "NO").optional(),
                facial_palsy: Joi.string().valid("YES", "NO").optional(),
                action_taken: Joi.string().optional(),
                ent_findings: Joi.string().optional(),
                ent_media: Joi.string().optional(),
                other_findings: Joi.string().optional(),
                other_media: Joi.string().optional()
            })

            const OcularFindingsSchema = Joi.object().keys({
                vision_od: Joi.number().optional(),
                vision_os: Joi.number().optional(),
                pupil_od: Joi.number().optional(),
                pupil_os: Joi.number().optional(),
                ocular_od: Joi.number().optional(),
                ocular_os: Joi.number().optional(),
                eyelids_od: Joi.number().optional(),
                eyelids_os: Joi.number().optional(),
                eom: Joi.string().optional(),
                anterior_segment: Joi.string().optional(),
                posterior_segment: Joi.string().optional(),
            })
            const ImagingDetailSchema = Joi.object().keys({
                hrct_findings: Joi.string().optional(),
                hrct_media: Joi.string().optional(),
                hrct_date: Joi.date().optional(),
                xray_chest_findings: Joi.string().optional(),
                xray_chest_media: Joi.string().optional(),
                xray_chest_date: Joi.date().optional(),
                xray_pns_findings: Joi.string().optional(),
                xray_pns_media: Joi.string().optional(),
                xray_pns_date: Joi.date().optional(),
                other_test_name: Joi.string().optional(),
                other_site: Joi.string().optional(),
                other_findings: Joi.string().optional(),
                other_media: Joi.string().optional(),
                other_date: Joi.date().optional(),
                doppler_findings: Joi.string().optional(),
                doppler_site: Joi.string().optional(),
                doppler_media: Joi.string().optional(),
                doppler_date: Joi.date().optional(),
                usg_findings: Joi.string().optional(),
                usg_site: Joi.string().optional(),
                usg_media: Joi.string().optional(),
                usg_date: Joi.date().optional(),
                mri_type: Joi.string().optional(),
                mri_findings: Joi.string().optional(),
                mri_site: Joi.string().optional(),
                mri_media: Joi.string().optional(),
                mri_date: Joi.date().optional(),
                ct_type: Joi.string().optional(),
                ct_findings: Joi.string().optional(),
                ct_site: Joi.string().optional(),
                ct_media: Joi.string().optional(),
                ct_date: Joi.date().optional(),
                cect_nose: Joi.string().optional(),
                cect_pns: Joi.string().optional(),
            })

            const ComorbiditySchema = Joi.object().keys({
                diabetes: Joi.string().valid("YES", "NO").optional(),
                hiv: Joi.string().valid("YES", "NO").optional(),
                asthma: Joi.string().valid("YES", "NO").optional(),
                organ_transplant: Joi.string().valid("YES", "NO").optional(),
                malignancy: Joi.string().valid("YES", "NO").optional(),
                renal_failure: Joi.string().valid("YES", "NO").optional(),
                diabetes_year: Joi.string().optional(),
                diabetes_month: Joi.string().optional(),
                diabetes_days: Joi.string().optional(),
                diabetes_status: Joi.string().valid("CONTROLLED", "DECONTROLLED").optional(),
                diabetes_type: Joi.string().optional(),
                diabetes_value: Joi.string().optional(),
                other: Joi.string().optional(),
                media_attachments: Joi.string().optional(),
                immunosuppressants: Joi.string().optional(),
            })

            const ProcedureDoneSchema = Joi.object().keys({
                status: Joi.string().optional(),
                procedure_name: Joi.string().optional(),
                procedure_date: Joi.date().optional(),
                procedure_performed: Joi.string().valid("OPEN", "ENDOSCOPIC").optional(),
                procedure_notes: Joi.string().optional(),
                media_attachment: Joi.string().optional(),
            })

            const BiopsySchema = Joi.object().keys({
                status: Joi.string().optional(),
                result: Joi.string().optional(),
                media_attachment: Joi.string().optional(),
            })
            const schema = Joi.object({
                attended: Joi.string().required(),
                name: Joi.string().required(),
                dob: Joi.date().required(),
                gender: Joi.string().required().valid("MALE", "FEMALE", "OTHER"),
                weight: Joi.number().required().min(1).max(999),
                height: Joi.number().required().min(1).max(9999),
                assigned_ward: Joi.string().required(),
                contactDetails: contactDetailsSchema,
                admissionDetails: AdmissionDetailsSchema,
                diagnosisDetails: DiagnosisDetailsSchema,
                covidDetails: CovidDetailsSchema,
                mucorDetails: MucorDetailsSchema,
                ocularFindings: OcularFindingsSchema,
                imagingDetails: ImagingDetailSchema,
                comorbidity: ComorbiditySchema,
                procedureDone: ProcedureDoneSchema,
                biopsy: BiopsySchema
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.createPatient(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in createPatient", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getPatient: async (req, res) => {
        try {
            const schema = Joi.object({
                _id: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getPatient(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getPatient", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getPatients: async (req, res) => {
        try {
            const schema = Joi.object({
                assigned_ward: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getPatients(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getPatients", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addAdvice: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                advice: Joi.string().required(),
                advice_media: Joi.string().optional()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addAdvice(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addAdvice", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getAdvice: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getAdvice(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getAdvice", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addCriticalEvent: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                note: Joi.string().required(),
                media: Joi.string().optional(),
                event_date: Joi.date().required(),
                event_time: Joi.string().required()
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addCriticalEvent(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addCriticalEvent", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getCriticalEvent: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getCriticalEvent(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getCriticalEvent", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addVitals: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                gcs_e: Joi.number().required(),
                gcs_v: Joi.number().required(),
                gcs_m: Joi.number().required(),
                pr: Joi.number().required(),
                bp_min: Joi.number().required(),
                bp_max: Joi.number().required(),
                spo2: Joi.number().required(),
                respiratory_rate: Joi.number().required(),
                patient_relaxed: Joi.string().valid("YES", "NO").required()
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addVitals(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addVitals", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getVitals: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getVitals(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getVitals", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addVentilation: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                room_air: Joi.number().required(),
                nrbm: Joi.number().required(),
                sfm: Joi.number().required(),
                nasal_cannula: Joi.number().required(),
                bipap_flow: Joi.number().required(),
                bipap_fio2: Joi.number().required(),
                bipap_support: Joi.string().valid("YES", "NO").required(),
                bipap_peep: Joi.number().required(),
                hfno_fio2: Joi.number().required(),
                hfno_support: Joi.string().valid("YES", "NO").required(),
                hfno_peep: Joi.number().required(),
                invasive_fio2: Joi.number().required(),
                invasive_support: Joi.string().valid("YES", "NO").required(),
                invasive_peep: Joi.number().required(),
                niv_fio2: Joi.number().required(),
                niv_support: Joi.string().valid("YES", "NO").required(),
                niv_peep: Joi.number().required(),
                niv_vt: Joi.number().required(),
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addVentilation(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addVentilation", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getVentilation: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getVentilation(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getVentilation", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addFeed: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                calories: Joi.number().required(),
                protein: Joi.number().required(),
                stool_passed: Joi.string().required()
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addFeed(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addFeed", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getFeed: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getFeed(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getFeed", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addBiopsy: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                status: Joi.string().valid("YES", "NO").required(),
                result: Joi.string().required(),
                media_attachment: Joi.string().optional()
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addBiopsy(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addBiopsy", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getBiopsy: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getBiopsy(value);
            console.log(result)
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getBiopsy", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addDiagnosis: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                diagnosis_note: Joi.string().required(),
            });

            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addDiagnosis(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addDiagnosis", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getDiagnosis: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getDiagnosis(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getDiagnosis", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addMucorDetails: async (req, res) => {
        try {
            const schema = Joi.object().keys({
                patient: Joi.string().required(),
                result: Joi.string().required(),
                date_of_symptoms: Joi.date().required(),
                nasal_stuffiness: Joi.string().valid("YES", "NO").required(),
                foul_smell: Joi.string().valid("YES", "NO").required(),
                epistaxis: Joi.string().valid("YES", "NO").required(),
                nasal_discharge: Joi.string().valid("YES", "NO").required(),
                nasal_mucosal: Joi.string().valid("YES", "NO").required(),
                facial_oedema: Joi.string().valid("YES", "NO").required(),
                facial_discoloration: Joi.string().valid("YES", "NO").required(),
                reginal_pain: Joi.string().valid("YES", "NO").required(),
                facial_pain: Joi.string().valid("YES", "NO").required(),
                worsening_headache: Joi.string().valid("YES", "NO").required(),
                proptosis: Joi.string().valid("YES", "NO").required(),
                loss_vision: Joi.string().valid("YES", "NO").required(),
                facial_paraesthesia: Joi.string().valid("YES", "NO").required(),
                sudden_ptosis: Joi.string().valid("YES", "NO").required(),
                ocular_motlilty: Joi.string().valid("YES", "NO").required(),
                facial_palsy: Joi.string().valid("YES", "NO").required(),
                action_taken: Joi.string().required(),
                ent_findings: Joi.string().required(),
                ent_media: Joi.string().optional(),
                other_findings: Joi.string().optional(),
                other_media: Joi.string().optional()
            })
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            delete value.patient;
            const result = await patientService.addMucorDetails(value, input.patient);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addMucorDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getMucorDetails: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getMucorDetails(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getMucorDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addOcularDetails: async (req, res) => {
        try {
            const schema = Joi.object().keys({
                patient: Joi.string().required(),
                vision_od: Joi.number().required(),
                vision_os: Joi.number().required(),
                pupil_od: Joi.number().required(),
                pupil_os: Joi.number().required(),
                ocular_od: Joi.number().required(),
                ocular_os: Joi.number().required(),
                eyelids_od: Joi.number().required(),
                eyelids_os: Joi.number().required(),
                eom: Joi.string().required(),
                anterior_segment: Joi.string().required(),
                posterior_segment: Joi.string().required(),
            })
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            delete value.patient;
            const result = await patientService.addOcularDetails(value, input.patient);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addOcularDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getOcularDetails: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getOcularDetails(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getOcularDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addProcedureDetails: async (req, res) => {
        try {
            const schema = Joi.object().keys({
                patient: Joi.string().required(),
                status: Joi.string().required(),
                procedure_name: Joi.string().required(),
                procedure_date: Joi.date().required(),
                procedure_performed: Joi.string().valid("OPEN", "ENDOSCOPIC").optional(),
                procedure_notes: Joi.string().required(),
                media_attachment: Joi.string().optional(),
            })
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            delete value.patient;
            const result = await patientService.addProcedureDetails(value, input.patient);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addProcedureDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getProcedureDetails: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getProcedureDetails(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getProcedureDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addComorbidityDetails: async (req, res) => {
        try {
            const schema = Joi.object().keys({
                patient: Joi.string().required(),
                diabetes: Joi.string().valid("YES", "NO").required(),
                hiv: Joi.string().valid("YES", "NO").required(),
                asthma: Joi.string().valid("YES", "NO").required(),
                organ_transplant: Joi.string().valid("YES", "NO").required(),
                malignancy: Joi.string().valid("YES", "NO").required(),
                renal_failure: Joi.string().valid("YES", "NO").required(),
                diabetes_year: Joi.string().required(),
                diabetes_month: Joi.string().required(),
                diabetes_days: Joi.string().required(),
                diabetes_status: Joi.string().valid("CONTROLLED", "DECONTROLLED").required(),
                diabetes_type: Joi.string().required(),
                diabetes_value: Joi.string().required(),
                other: Joi.string().required(),
                media_attachments: Joi.string().optional(),
                immunosuppressants: Joi.string().optional(),
            })
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            delete value.patient;
            const result = await patientService.addComorbidityDetails(value, input.patient);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addComorbidityDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getComorbidityDetails: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
            });
            const input = req.params;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getComorbidityDetails(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getComorbidityDetails", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    addRx: async (req, res) => {
        try {
            const rxDetail = Joi.object().keys({
                drug_type: Joi.string().optional(),
                drug_name: Joi.string().optional(),
                drug_route: Joi.string().optional(),
                drug_dose: Joi.string().optional(),
                drug_frequency: Joi.string().optional(),
                drug_start_date: Joi.date().optional(),
                drug_end_date: Joi.date().optional(),
                instructions: Joi.string().optional(),
                media: Joi.string().optional(),
                drug_status: Joi.string().valid('STOPPED', 'HOLD', 'STARTED').optional()
            })
            const schema = Joi.object().keys({
                patient: Joi.string().required(),
                anti_biotics: rxDetail,
                anti_fungal: rxDetail,
                anti_coagulation: rxDetail,
                steroids: rxDetail,
                insulin: rxDetail,
                infusion: rxDetail,
                base_line_fluid: rxDetail,
                experimental_treatment: rxDetail,
                other_drug: rxDetail,
            })
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.addRx(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in addRx", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getRx: async (req, res) => {
        try {
            const schema = Joi.object({
                patient: Joi.string().required(),
                limit: Joi.number().required(),
                page: Joi.number().required()
            });
            const input = req.body;
            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await patientService.getRx(value);
            makeResponse.sendResponse(res, result);

        } catch (error) {
            console.log("Error in getRx", error)
            makeResponse.errorResponse(res, error.message);
        }
    },
};

