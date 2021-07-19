const patientService = require('../services/patient.service');
const Joi = require('joi');
module.exports = {
    createPatient: async (req, res) => {
        try {
            const input = req.body;

            const personalDetailsSchema = Joi.object().keys({
                state: Joi.string().required(),
                city: Joi.string().required(),
                address: Joi.string().required(),
                area: Joi.string().required(),
                complete_address: Joi.string().required(),
                pin_code: Joi.string().required().min(5),
                mobile: Joi.string().required().min(10)
            }).required();
            const AdmissionDetailsSchema = Joi.object().keys({
                doa: Joi.date().required(),
                uhid: Joi.string().required(),
            }).required();
            const DiagnosisDetailsSchema = Joi.object().keys({
                diagnosis_note: Joi.string().required(),
            }).required();

            const RtpcrReports = Joi.object().keys({
                test_date: Joi.date(),
                result: Joi.string()
            })
            const CovidTreatment = Joi.object().keys({
                number_of_episode: Joi.number(),
                episode_date: Joi.date(),
                history: Joi.string(),
                history_type: Joi.string(),
                negative_date: Joi.date()
            })
            const Dose = Joi.object().keys({
                number_of_dose: Joi.number(),
                dose1_date: Joi.date(),
                dose2_date: Joi.date()
            })
            const DrugDetails = Joi.object().keys({
                remedisvir: Joi.string(),
                remedisvir_duration: Joi.string(),
                tocilizumab: Joi.string(),
                tocilizumab_duration: Joi.string(),
                ventilation: Joi.string(),
                ventilation_duration: Joi.string(),
                o2: Joi.string(),
                o2_duration: Joi.string(),
                corticosteroids: Joi.string(),
                corticosteroids_method: Joi.string(),
                dose: Joi.string()
            })
            const CovidDetailsSchema = Joi.object({
                rtpcr: RtpcrReports,
                covidTreatment: CovidTreatment,
                doseDetails: Dose,
                drugDetails: DrugDetails
            })
            const MucorDetailsSchema = Joi.object().keys({
                result: Joi.string(),
                date_of_symptoms: Joi.date(),
                warning_and_sign: Joi.string(),
                action_taken: Joi.string()
            })
            const OcularFindingsSchema = Joi.object().keys({
                vision_od: Joi.string(),
                vision_os: Joi.string(),
                pupil_od: Joi.string(),
                pupil_os: Joi.string(),
                ocular_od: Joi.string(),
                ocular_os: Joi.string(),
                eyelids_od: Joi.string(),
                eyelids_os: Joi.string(),
                eom: Joi.string(),
                anterior_segment: Joi.string(),
                ent_findings: Joi.string(),
                ent_media: Joi.string(),
                other_findings: Joi.string(),
                other_media: Joi.string(),
            })
            const ImagingDetailSchema = Joi.object().keys({
                hrct_findings: Joi.string(),
                hrct_media: Joi.string(),
                hrct_date: Joi.date(),
                xray_chest_findings: Joi.string(),
                xray_chest_media: Joi.string(),
                xray_chest_date: Joi.date(),
                xray_pns_findings: Joi.string(),
                xray_pns_media: Joi.string(),
                xray_pns_date: Joi.date(),
                other_test_name: Joi.string(),
                other_site: Joi.string(),
                other_findings: Joi.string(),
                other_media: Joi.string(),
                other_date: Joi.date(),
                doppler_findings: Joi.string(),
                doppler_site: Joi.string(),
                doppler_media: Joi.string(),
                doppler_date: Joi.date(),
                usg_findings: Joi.string(),
                usg_site: Joi.string(),
                usg_media: Joi.string(),
                usg_date: Joi.date(),
                mri_type: Joi.string(),
                mri_findings: Joi.string(),
                mri_site: Joi.string(),
                mri_media: Joi.string(),
                mri_date: Joi.date(),
                ct_type: Joi.string(),
                ct_findings: Joi.string(),
                ct_site: Joi.string(),
                ct_media: Joi.string(),
                ct_date: Joi.date(),
                cect_nose: Joi.string(),
                cect_pns: Joi.string(),
            })
            const ComorbiditySchema = Joi.object().keys({
                diabetes: Joi.string(),
                hiv: Joi.string(),
                asthma: Joi.string(),
                organ_transplant: Joi.string(),
                malignancy: Joi.string(),
                renal_failure: Joi.string(),
                diabetes_year: Joi.string(),
                diabetes_month: Joi.string(),
                diabetes_days: Joi.string(),
                diabetes_status: Joi.string(),
                diabetes_type: Joi.string(),
                diabetes_value: Joi.string(),
                other: Joi.string(),
                media_attachments: Joi.string(),
            })
            const ProcedureDoneSchema = Joi.object().keys({
                status: Joi.string(),
                date_of_procedure: Joi.date(),
                procedure_performed: Joi.string(),
                procedure_notes: Joi.string(),
                media_attachment: Joi.string(),
            })
            const BiopsySchema = Joi.object().keys({
                status: Joi.string(),
                result: Joi.date(),
                media_attachment: Joi.string(),
            })
            const schema = Joi.object({
                name: Joi.string().required(),
                dob: Joi.date().required(),
                gender: Joi.string().required().valid("MALE", "FEMALE", "OTHER"),
                weight: Joi.string().required(),
                height: Joi.string().required(),
                assigned_ward: Joi.string().required(),
                personalDetails: personalDetailsSchema,
                admissionDetails: AdmissionDetailsSchema,
                diagnosisDetails: DiagnosisDetailsSchema,
                covidDetails: CovidDetailsSchema,
                mucorDetails: MucorDetailsSchema,
                ocularFindings: OcularFindingsSchema,
                imageingDetails: ImagingDetailSchema,
                comorbidity: ComorbiditySchema,
                procedureDone: ProcedureDoneSchema,
                biopsy: BiopsySchema
            });

            const { error, value } = schema.validate(input);
            if (error) {
                res.status(500).send(error.message);
                return false;
            };
            const result = await patientService.createPatient(value);
            res.status(200).send(result);

        } catch (error) {
            console.log("Error in create patient", error)
            res.status(500).send(error.message)
        }
    }

};

