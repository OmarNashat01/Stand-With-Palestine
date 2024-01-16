import json

def get_day_fatalaties(day_data):
    total = day_data['martyr_data']['total_gaza'] + day_data['martyr_data']['total_west']
    kids = day_data['martyr_data']['kids_gaza'] + day_data['martyr_data']['kids_west']

    return total, kids

def filter_month_data(pcbs_data, required_month):
    days = []
    total_fatalaties = []
    kids_fatalaties = []

    for date, data in pcbs_data.items():
        day, month = [int(x) for x in date.split('/')][:2]
        if month == required_month:
            days.append(str(day))

            total, kids = get_day_fatalaties(data)
            total_fatalaties.append(total)
            kids_fatalaties.append(kids)
    return days, total_fatalaties, kids_fatalaties


if __name__ == "__main__":
    with open("public/pcbs_data.json") as pcbs_data:
        MONTH = 12
        pcbs_data = json.loads(pcbs_data.read())
        days, total, kids = filter_month_data(pcbs_data, MONTH)

        print(f"Available days: {days}")
        print(f"Child Fatalaties: {kids}")
        print(f"Total Fatalaties: {total}")
