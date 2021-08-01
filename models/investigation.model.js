const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HemogramSchema = new Schema({
    date: { type: Date },
    hb: { type: String },
    tlc: { type: String },
    dlc: { type: String },
    platelet: { type: String },
})
const CoagulogramSchema = new Schema({
    date: { type: Date },
    pti: { type: String },
    inr: { type: String },
    aptt: { type: String },
    pro_cal: { type: String },
})
const AbgSchema = new Schema({
    date: { type: Date },
    ph2: { type: String },
    pao2: { type: String },
    paco2: { type: String },
    hco3: { type: String },
    sao2: { type: String },
})
const LftSchema = new Schema({
    date: { type: Date },
    alk_phos: { type: String },
    sgot_sgpt: { type: String },
    bilirubin: { type: String },
    proteins: { type: String },
    albumin: { type: String },
    globulin: { type: String },
})
const KftSchema = new Schema({
    date: { type: Date },
    creatinine: { type: String },
    urea: { type: String },
    na_k: { type: String },
})
const MarkersSchema = new Schema({
    date: { type: Date },
    ferritin: { type: String },
    d_dimer: { type: String },
    ldh: { type: String },
    il_6: { type: String },
})
const CulturesSchema = new Schema({
    date: { type: Date },
    koh_staining: { type: String },
    koh_sent_date: { type: Date },
    status: { type: String },
    date_of_koh: { type: Date },
    koh_media: { type: String },
    microscopy: { type: String },
    microscopy_sent_date: { type: Date },
    microscopy_status: { type: String },
    microscopy_media: { type: String },
    blood: { type: String },
    blood_media: { type: String },
    blood_sent_date: { type: Date },
    urine: { type: String },
    urine_media: { type: String },
    urine_sent_date: { type: Date },
    spputum_et_tt: { type: String },
    spputum_et_tt_media: { type: String },
    spputum_et_tt_sent_date: { type: Date },
    other_et_tt: { type: String },
    other_et_tt_media: { type: String },
    other_et_tt_sent_date: { type: Date },
})
const OtherSchema = new Schema({
    date: { type: Date },
    name: { type: String },
    site: { type: String },
    findings: { type: String },
    media: { type: String },
})
const InvestigationSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    hemogram: HemogramSchema,
    coagulogram: CoagulogramSchema,
    abg: AbgSchema,
    lft: LftSchema,
    kft: KftSchema,
    inflammatory_markers: MarkersSchema,
    cultures: CulturesSchema,
    others: OtherSchema

}, {
    timestamps: true
});


const Investigation = mongoose.model('Investigation', InvestigationSchema);

module.exports = Investigation;