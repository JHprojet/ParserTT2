const reader = new FileReader()

function loadJson(file)
{
    var file = document.getElementById("myJSONfile").files[0];
    if (file) {
        document.getElementById("fileContents").innerHTML = "";
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            if(file.name.split('.').pop() != 'json') document.getElementById("fileContents").innerHTML = "Bad format. File must be a JSON.";
            else {
                var JSONobject = JSON.parse(evt.target.result);
                JSONobjectToCsv(JSONobject);
            }
        }
        reader.onerror = function (evt) {
            document.getElementById("fileContents").innerHTML = "error reading file";
        }
    }  
}

function JSONobjectToCsv(AllRaids)
{
    myCSVtext = "Tier"+add("Level")+add("BonusType")+add("BonusValue")+add("T1")+add("T2")+add("T3")+add("T4")+add("T5")+add("T6")+add("T7")+add("T8")+
    //Titan 1
    add("T1-Name")+add("T1-TotHP")+add("T1-debuffType")+add("T1-debuffValue")+add("T1-cursedDebuffType")+add("T1-cursedDebuffValue")+ 
    add("T1-HeadHP")+add("T1-TorsoHP")+add("T1-RightArmHP")+add("T1-LeftArmHP")+add("T1-RightLegHP")+add("T1-LeftLegHP")+add("T1-RightHandHP")+add("T1-LeftHandHP")+
    add("T1-HeadArmor")+add("T1-TorsoArmor")+add("T1-RightArmArmor")+add("T1-LeftArmArmor")+add("T1-RightLegArmor")+add("T1-LeftLegArmor")+add("T1-RightHandArmor")+add("T1-LeftHandArmor")+
    add("T1-HeadCursed")+add("T1-TorsoCursed")+add("T1-RightArmCursed")+add("T1-LeftArmCursed")+add("T1-RightLegCursed")+add("T1-LeftLegCursed")+add("T1-RightHandCursed")+add("T1-LeftHandCursed")+
    //Titan 2
    add("T2-Name")+add("T2-TotHP")+add("T2-debuffType")+add("T2-debuffValue")+add("T2-cursedDebuffType")+add("T2-cursedDebuffValue")+ 
    add("T2-HeadHP")+add("T2-TorsoHP")+add("T2-RightArmHP")+add("T2-LeftArmHP")+add("T2-RightLegHP")+add("T2-LeftLegHP")+add("T2-RightHandHP")+add("T2-LeftHandHP")+
    add("T2-HeadArmor")+add("T2-TorsoArmor")+add("T2-RightArmArmor")+add("T2-LeftArmArmor")+add("T2-RightLegArmor")+add("T2-LeftLegArmor")+add("T2-RightHandArmor")+add("T2-LeftHandArmor")+
    add("T2-HeadCursed")+add("T2-TorsoCursed")+add("T2-RightArmCursed")+add("T2-LeftArmCursed")+add("T2-RightLegCursed")+add("T2-LeftLegCursed")+add("T2-RightHandCursed")+add("T2-LeftHandCursed")+
    //Titan 3
    add("T3-Name")+add("T3-TotHP")+add("T3-debuffType")+add("T3-debuffValue")+add("T3-cursedDebuffType")+add("T3-cursedDebuffValue")+ 
    add("T3-HeadHP")+add("T3-TorsoHP")+add("T3-RightArmHP")+add("T3-LeftArmHP")+add("T3-RightLegHP")+add("T3-LeftLegHP")+add("T3-RightHandHP")+add("T3-LeftHandHP")+
    add("T3-HeadArmor")+add("T3-TorsoArmor")+add("T3-RightArmArmor")+add("T3-LeftArmArmor")+add("T3-RightLegArmor")+add("T3-LeftLegArmor")+add("T3-RightHandArmor")+add("T3-LeftHandArmor")+
    add("T3-HeadCursed")+add("T3-TorsoCursed")+add("T3-RightArmCursed")+add("T3-LeftArmCursed")+add("T3-RightLegCursed")+add("T3-LeftLegCursed")+add("T3-RightHandCursed")+add("T3-LeftHandCursed")+
    //From To
    add("From")+add("To")+"\n";
    AllRaids.forEach((currentRaid) =>
    {
        var R = new Raid(currentRaid);
        var datefrom = AllRaids[0].raid_info_valid_from.toString().split("T")[0].split("-");
        var dateTo = AllRaids[0].raid_info_expire_at.toString().split("T")[0].split("-");
        datefrom = datefrom[2]+"/"+datefrom[1]+"/"+datefrom[0];
        dateTo = dateTo[2]+"/"+dateTo[1]+"/"+dateTo[0]
        console.log("dateFrom = "+datefrom);
        console.log("dateTo = "+dateTo);
        myCSVtext += R.Tier+add(R.Level)+add(R.BonusType)+add(R.BonusValue.toString())+add(R.Order[0])+add(R.Order[1])+add(R.Order[2])+add(R.Order[3])+add(R.Order[4])+add(R.Order[5])+add(R.Order[6])+add(R.Order[7])+
            //Titan 1
            add(R.Titans[0].Name)+add(R.Titans[0].totalHp)+add(R.Titans[0].debuffType)+add(R.Titans[0].debuffValue.toString())+add(R.Titans[0].cursedDebuffType)+add(R.Titans[0].cursedDebuffValue.toString())+ 
            add(R.Titans[0].Head.HP)+add(R.Titans[0].Torso.HP)+add(R.Titans[0].RightArm.HP)+add(R.Titans[0].LeftArm.HP)+add(R.Titans[0].RightLeg.HP)+add(R.Titans[0].LeftLeg.HP)+add(R.Titans[0].RightHand.HP)+add(R.Titans[0].LeftHand.HP)+
            add(R.Titans[0].Head.Armor)+add(R.Titans[0].Torso.Armor)+add(R.Titans[0].RightArm.Armor)+add(R.Titans[0].LeftArm.Armor)+add(R.Titans[0].RightLeg.Armor)+add(R.Titans[0].LeftLeg.Armor)+add(R.Titans[0].RightHand.Armor)+add(R.Titans[0].LeftHand.Armor)+
            add(R.Titans[0].Head.Cursed)+add(R.Titans[0].Torso.Cursed)+add(R.Titans[0].RightArm.Cursed)+add(R.Titans[0].LeftArm.Cursed)+add(R.Titans[0].RightLeg.Cursed)+add(R.Titans[0].LeftLeg.Cursed)+add(R.Titans[0].RightHand.Cursed)+add(R.Titans[0].LeftHand.Cursed)+
            //Titan 2
            add(R.Titans[1].Name)+add(R.Titans[1].totalHp)+add(R.Titans[1].debuffType)+add(R.Titans[1].debuffValue.toString())+add(R.Titans[1].cursedDebuffType)+add(R.Titans[1].cursedDebuffValue.toString())+ 
            add(R.Titans[1].Head.HP)+add(R.Titans[1].Torso.HP)+add(R.Titans[1].RightArm.HP)+add(R.Titans[1].LeftArm.HP)+add(R.Titans[1].RightLeg.HP)+add(R.Titans[1].LeftLeg.HP)+add(R.Titans[1].RightHand.HP)+add(R.Titans[1].LeftHand.HP)+
            add(R.Titans[1].Head.Armor)+add(R.Titans[1].Torso.Armor)+add(R.Titans[1].RightArm.Armor)+add(R.Titans[1].LeftArm.Armor)+add(R.Titans[1].RightLeg.Armor)+add(R.Titans[1].LeftLeg.Armor)+add(R.Titans[1].RightHand.Armor)+add(R.Titans[1].LeftHand.Armor)+
            add(R.Titans[1].Head.Cursed)+add(R.Titans[1].Torso.Cursed)+add(R.Titans[1].RightArm.Cursed)+add(R.Titans[1].LeftArm.Cursed)+add(R.Titans[1].RightLeg.Cursed)+add(R.Titans[1].LeftLeg.Cursed)+add(R.Titans[1].RightHand.Cursed)+add(R.Titans[1].LeftHand.Cursed);
            //Titan 3
            if(R.Titans[2] != null) {
                myCSVtext += add(R.Titans[2].Name)+add(R.Titans[2].totalHp)+add(R.Titans[2].debuffType)+add(R.Titans[2].debuffValue.toString())+add(R.Titans[2].cursedDebuffType)+add(R.Titans[2].cursedDebuffValue.toString())+ 
            add(R.Titans[2].Head.HP)+add(R.Titans[2].Torso.HP)+add(R.Titans[2].RightArm.HP)+add(R.Titans[2].LeftArm.HP)+add(R.Titans[2].RightLeg.HP)+add(R.Titans[2].LeftLeg.HP)+add(R.Titans[2].RightHand.HP)+add(R.Titans[2].LeftHand.HP)+
            add(R.Titans[2].Head.Armor)+add(R.Titans[2].Torso.Armor)+add(R.Titans[2].RightArm.Armor)+add(R.Titans[2].LeftArm.Armor)+add(R.Titans[2].RightLeg.Armor)+add(R.Titans[2].LeftLeg.Armor)+add(R.Titans[2].RightHand.Armor)+add(R.Titans[2].LeftHand.Armor)+
            add(R.Titans[2].Head.Cursed)+add(R.Titans[2].Torso.Cursed)+add(R.Titans[2].RightArm.Cursed)+add(R.Titans[2].LeftArm.Cursed)+add(R.Titans[2].RightLeg.Cursed)+add(R.Titans[2].LeftLeg.Cursed)+add(R.Titans[2].RightHand.Cursed)+add(R.Titans[2].LeftHand.Cursed)+
            add(datefrom)+add(dateTo)+"\n";
            }
            else {
                myCSVtext += add("")+add("")+add("")+add("")+add("")+add("")+ 
            add("")+add("")+add("")+add("")+add("")+add("")+add("")+add("")+
            add("")+add("")+add("")+add("")+add("")+add("")+add("")+add("")+
            add("")+add("")+add("")+add("")+add("")+add("")+add("")+add("")+
            add(datefrom)+add(dateTo)+"\n";
            }
        });
    document.getElementById("fileContents").innerHTML = myCSVtext;
}

function add(A){
    //console.log(A + ":" + typeof(A));
    if(A.includes("/")) return ";"+A;
    if(typeof(A)=="string") return ";'"+A;
    if(typeof(A)=="number") return ";"+Math.round(A);
}

function copy() {
    let textarea = document.getElementById("fileContents");
    textarea.select();
    document.execCommand("copy");
}

class Raid{
    constructor(obj) {
        this.Level = obj.level;
        this.Tier = obj.tier;
        this.BonusType = (obj.area_buffs != undefined) ? obj.area_buffs[0].bonus_type : '';
        this.BonusValue = (obj.area_buffs != undefined) ? obj.area_buffs[0].bonus_amount : '';
        this.Titans = [new Titan(obj.titans[0]),new Titan(obj.titans[1]),obj.titans[2] != undefined ? new Titan(obj.titans[2]) : null];
        this.Order = ['','','','','','','',''];
        for(let i = 0;i < obj.spawn_sequence.length;i++) {
            this.Order[i] = obj.spawn_sequence[i];
        }
      }
}

class Titan{
    constructor(obj) {
        this.Name = obj.enemy_name;
        this.debuffType = (obj.area_debuffs != undefined) ? obj.area_debuffs[0].bonus_type :'';
        this.debuffValue = (obj.area_debuffs != undefined) ? obj.area_debuffs[0].bonus_amount :'';
        this.cursedDebuffType = (obj.cursed_debuffs != undefined) ? obj.cursed_debuffs[0].bonus_type :'';
        this.cursedDebuffValue =(obj.cursed_debuffs != undefined) ? obj.cursed_debuffs[0].bonus_amount :'';
        this.totalHp = obj.total_hp;
        if(obj.parts.length == 8)
        {
            this.Head = new Part(obj.parts[0], null);
            this.Torso = new Part(obj.parts[1], null);
            this.RightArm = new Part(obj.parts[2], null);
            this.LeftArm = new Part(obj.parts[3], null);
            this.RightLeg = new Part(obj.parts[4], null);
            this.LeftLeg = new Part(obj.parts[5], null);
            this.RightHand = new Part(obj.parts[6], null);
            this.LeftHand = new Part(obj.parts[7], null);
        }
        else if (obj.parts.length == 16)
        {
            this.Head = new Part(obj.parts[0],obj.parts[1]);
            this.Torso = new Part(obj.parts[2],obj.parts[3]);
            this.RightArm = new Part(obj.parts[4],obj.parts[5]);
            this.LeftArm = new Part(obj.parts[6],obj.parts[7]);
            this.RightLeg = new Part(obj.parts[8],obj.parts[9]);
            this.LeftLeg = new Part(obj.parts[10],obj.parts[11]);
            this.RightHand = new Part(obj.parts[12],obj.parts[13]);
            this.LeftHand = new Part(obj.parts[14],obj.parts[15]);
        }
           
    }
}

class Part {
    constructor(Part1,Part2) {
        this.HP = Part1.total_hp;
        this.Armor = (Part2 != null) ? Part2.total_hp : 0;
        if(Part2 != null && Part2.cursed != undefined) this.Cursed = (Part2.cursed) ? 1 : 0;
        else this.Cursed = 0;
    }
}
